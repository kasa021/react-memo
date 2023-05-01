import React, { useState } from 'react';
import MemoList from './components/MemoList';
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

  const handleEditMemo = (id: number,newMemo: Memo) => {
    const filteredMemos = memos.filter((memo) => memo.id !== id);
    const newMemos = [...filteredMemos,newMemo];
    setMemos(newMemos);
  };


  return (
    <div>
      <h1>メモ帳アプリ</h1>
      <AddMemo memos={memos} handleAddMemo={handleAddMemo} handleTitleChange={handleTitleChange} handleContentChange={handleContentChange} title={title} content={content} />
      <MemoList memos={memos} handleDeleteMemo={handleDeleteMemo} handleEditMemo={handleEditMemo} />
    </div>
  );
};

export default MemoApp;
