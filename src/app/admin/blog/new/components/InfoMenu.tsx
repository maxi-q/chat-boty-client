import React, { useState } from 'react';

const ArticleForm = () => {
  // Состояния для полей формы
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [readingTime, setReadingTime] = useState<number | ''>('');

  const handleSave = () => {
    console.log('Заголовок:', title);
    console.log('Описание:', description);
    console.log('Время чтения (в минутах):', readingTime);
  };

  return (
    <div className="p-6 bg-white rounded shadow-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Создать статью</h2>
      
      {/* Поле для заголовка */}
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Заголовок
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          placeholder="Введите заголовок статьи"
        />
      </div>

      {/* Поле для описания */}
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Описание
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          placeholder="Введите краткое описание"
        />
      </div>

      {/* Поле для времени чтения */}
      <div className="mb-4">
        <label htmlFor="readingTime" className="block text-sm font-medium text-gray-700">
          Время чтения (в минутах)
        </label>
        <input
          type="number"
          id="readingTime"
          value={readingTime}
          onChange={(e) => setReadingTime(e.target.value ? parseInt(e.target.value) : '')}
          className="mt-1 block w-full border border-gray-300 rounded p-2"
          placeholder="Введите время чтения"
        />
      </div>

      {/* Кнопка сохранения */}
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Сохранить
      </button>
    </div>
  );
};

export default ArticleForm;
