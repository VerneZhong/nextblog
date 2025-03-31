// components/FirebaseComments.tsx
'use client';

import { useState, useEffect } from 'react';
import { db, auth } from '@/lib/firebase';
import {
    collection,
    addDoc,
    query,
    where,
    orderBy,
    onSnapshot,
    serverTimestamp,
    DocumentData
} from 'firebase/firestore';
import {
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from 'firebase/auth';

interface FirebaseCommentsProps {
    postId: string;
}

export default function FirebaseComments({ postId }: FirebaseCommentsProps) {
    const [comments, setComments] = useState<DocumentData[]>([]);
    const [newComment, setNewComment] = useState('');
    const [user, setUser] = useState(auth.currentUser);

    // 监听认证状态
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        return unsubscribe;
    }, []);

    // 加载评论
    useEffect(() => {
        const q = query(
            collection(db, 'comments'),
            where('postId', '==', postId),
            orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const commentsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setComments(commentsData);
        });

        return unsubscribe;
    }, [postId]);

    // 登录
    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("ログインエラー", error);
        }
    };

    // 登出
    const handleLogout = () => {
        signOut(auth);
    };

    // 提交评论
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!newComment.trim() || !user) return;

        try {
            await addDoc(collection(db, 'comments'), {
                content: newComment,
                postId: postId,
                userId: user.uid,
                userName: user.displayName,
                userPhoto: user.photoURL,
                createdAt: serverTimestamp()
            });

            setNewComment('');
        } catch (error) {
            console.error("コメントの送信中にエラーが発生した", error);
        }
    };

    return (
        <div className="mt-10 pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-4">コメント</h3>

            {/* 评论列表 */}
            <div className="space-y-4 mb-6">
                {comments.length === 0 ? (
                    <p className="text-gray-500">まだコメントはありません。最初にコメントしてください！</p>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="bg-white p-4 rounded-lg shadow">
                            <div className="flex items-center mb-2">
                                {comment.userPhoto && (
                                    <img
                                        src={comment.userPhoto}
                                        alt={comment.userName}
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                )}
                                <span className="font-medium">{comment.userName}</span>
                                <span className="text-gray-500 text-sm ml-2">
                  {comment.createdAt?.toDate().toLocaleDateString()}
                </span>
                            </div>
                            <p>{comment.content}</p>
                        </div>
                    ))
                )}
            </div>

            {/* 登录/登出按钮 */}
            {!user ? (
                <button
                    onClick={handleLogin}
                    className="mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                    コメントするにはGoogleでログインしてください
                </button>
            ) : (
                <div className="mb-4 flex items-center">
                    <img
                        src={user.photoURL || ''}
                        alt={user.displayName || ''}
                        className="w-8 h-8 rounded-full mr-2"
                    />
                    <span>{user.displayName}</span>
                    <button
                        onClick={handleLogout}
                        className="ml-4 text-sm text-gray-500 hover:text-gray-700"
                    >
                        ログアウト
                    </button>
                </div>
            )}

            {/* 评论表单 */}
            {user && (
                <form onSubmit={handleSubmit} className="space-y-3">
          <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="コメントを書いてください..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              required
          />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        レビューを送信
                    </button>
                </form>
            )}
        </div>
    );
}