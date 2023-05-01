import React from "react";

interface Memo {
    id: number;
    title: string;
    content: string;
}

interface Props {
    memos: Memo[];
    handleDeleteMemo: (id: number) => void;
}

const DeleteMemo: React.FC<Props> = ({ memos, handleDeleteMemo }) => {
    return (
        <ul>
            {memos.map((memo) => (
                <li key={memo.id}>
                    <h2>{memo.title}</h2>
                    <p>{memo.content}</p>
                    <button onClick={() => handleDeleteMemo(memo.id)}>
                        削除
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default DeleteMemo;