import React, { useState } from 'react';
import DeleteMemo from './components/DeleteMemo';
import AddMemo from './components/AddMemo';


interface Memo {
  id: number;
  title: string;
  content: string;
}

const MemoApp = () => {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleAddMemo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMemo: Memo = {
      id: Date.now(),
      title: title,
      content: content,
    };
    setMemos([...memos, newMemo]);
    setTitle('');
    setContent('');
  };

  const handleDeleteMemo = (id: number) => {
    const filteredMemos = memos.filter((memo) => memo.id !== id);
    setMemos(filteredMemos);
  };

  return (
    <div>
      <h1>メモ帳アプリ</h1>
      <AddMemo memos={memos} handleAddMemo={handleAddMemo} handleTitleChange={handleTitleChange} handleContentChange={handleContentChange} title={title} content={content} />
      <DeleteMemo memos={memos} handleDeleteMemo={handleDeleteMemo} />
    </div>
  );
};

export default MemoApp;
