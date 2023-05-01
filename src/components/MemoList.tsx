import React from "react";
import { MemoItem } from "./MemoItem";

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

const MemoList: React.FC<Props> = ({ memos, handleDeleteMemo, handleEditMemo }) => {
    return (
        <ul>
            {memos.map((memo) => (
                <MemoItem
                    key={memo.id}
                    memo={memo}
                    handleDeleteMemo={handleDeleteMemo}
                    handleEditMemo={handleEditMemo}
                />
            ))}
        </ul>
    );
};

export default MemoList;
