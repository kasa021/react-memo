import React from "react";

interface Memo {
    id: number;
    title: string;
    content: string;
}

interface Props {
    memos: Memo[];
    handleAddMemo: (e: React.FormEvent<HTMLFormElement>) => void;
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    title: string;
    content: string;
}

const AddMemo: React.FC<Props> = ({
    handleAddMemo,
    handleTitleChange,
    handleContentChange,
    title,
    content,
}) => {
    return (
        <div>
            <form onSubmit={handleAddMemo}>
                <div>
                    <label htmlFor="memo-title">タイトル:</label>
                    <input
                        id="memo-title"
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div>
                    <label htmlFor="memo-content">内容:</label>
                    <textarea
                        id="memo-content"
                        value={content}
                        onChange={handleContentChange}
                    />
                </div>
                <button type="submit">追加</button>
            </form>
        </div>
    );
};

export default AddMemo;