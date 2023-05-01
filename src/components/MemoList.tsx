import React, { useState } from "react";

interface Memo {
    id: number;
    title: string;
    content: string;
}

interface Props {
    memos: Memo[];
    handleDeleteMemo: (id: number) => void;
    handleEditMemo: (id: number, newMemo: Memo) => void;
}

const MemoList: React.FC<Props> = ({ memos, handleDeleteMemo , handleEditMemo}) => {
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const handleEdit = (id: number) => {
        const newMemo: Memo = {
            id: id,
            title: newTitle,
            content: newContent,
        };
        handleEditMemo(id,newMemo);
    };


    return (
        <ul>
            {memos.map((memo) => (
                <li key={memo.id}>
                    <h2>{memo.title}</h2>
                    <p>{memo.content}</p>
                    <button onClick={() => handleDeleteMemo(memo.id)}>
                        削除
                    </button>
                    <button onClick={() => handleEdit(memo.id)}>
                        編集
                    </button>
                    <input 
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    ></input>
                    <input
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                    ></input>
                    
                </li>
            ))}
        </ul>
    );
};

export default MemoList;