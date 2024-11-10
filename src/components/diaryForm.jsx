import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function DiaryForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [diaryList, setDiaryList] = useState([]); // 전체 데이터를 저장할 상태

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
            fetchDiary(); // 데이터 삽입 후 목록 갱신
        }
    };

    // 전체 일기 데이터 조회
    const fetchDiary = async () => {
        const { data, error } = await supabase.from('diary').select('*');

        if (error) {
            console.error('Error fetching data:', error);
        } else {
            setDiaryList(data); // 조회한 데이터를 상태에 저장
        }
    };

    // 컴포넌트가 처음 렌더링될 때 데이터 가져오기
    useEffect(() => {
        fetchDiary();
    }, []);

    return (
        <>
            <form>
                <input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
                <button type="button" onClick={saveDiary}>
                    저장
                </button>
            </form>

            <h2>일기 목록</h2>
            <ul>
                {diaryList.map((diary) => (
                    <li key={diary.id}>
                        <strong>{diary.title}</strong> - {diary.content} (작성일: {diary.created_at})
                    </li>
                ))}
            </ul>
        </>
    );
}

export default DiaryForm;
