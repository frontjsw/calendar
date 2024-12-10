import { useState } from 'react';
import { supabase } from '../supabaseClient';
import Input from '../components/common/Input';

const PostNote = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // 일기 데이터 저장
    const saveDiary = async () => {
        const { data, error } = await supabase.from('diary').insert([
            {
                title: title,
                content: content,
                created_at: new Date().toISOString(),
            },
        ]);

        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Insert success:', data);
        }
    };

    return (
        <div>
            <Input placeholder="제목" value={title} onChange={setTitle} />
            <Input placeholder="내용" value={content} onChange={setContent} />
            <button type="button" onClick={saveDiary}>
                저장
            </button>
        </div>
    );
};

export default PostNote;
