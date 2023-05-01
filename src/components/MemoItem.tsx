import React, { useState } from "react";

interface Memo {
    id: number;
    title: string;
    content: string;
}

interface Props {
    memo: Memo;
    handleDeleteMemo: (id: number) => void;
    handleEditMemo: (id: number, newMemo: Memo) => void;
}

export const MemoItem: React.FC<Props> = ({ memo, handleDeleteMemo, handleEditMemo }) => {
    const [newTitle, setNewTitle] = useState<string>("");
    const [newContent, setNewContent] = useState<string>("");

    const handleEdit = (id: number) => {
        const newMemo: Memo = {
            id: id,
            title: newTitle,
            content: newContent,
        };
        handleEditMemo(id, newMemo);
    };

    return (
        <li key={memo.id}>
            <h2>{memo.title}</h2>
            <p>{memo.content}</p>
            <button onClick={() => handleDeleteMemo(memo.id)}>削除</button>
            <button onClick={() => handleEdit(memo.id)}>編集</button>
            <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            ></input>
            <input
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
            ></input>
        </li>
    );
};
