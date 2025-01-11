import { create } from 'zustand';
import { supabase } from '../supabaseClient';

const usePostStore = create((set) => ({
    // 상태
    posts: [],

    // 액션
    getPosts: async () => {
        const { data, error } = await supabase.from('diary').select('*');

        if (error) {
            console.error('Error fetching data:', error);
            return;
        }

        set({ posts: data });
    },

    savePost: async (post) => {
        const { data, error } = await supabase.from('diary').insert([post]);

        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Insert success:', data);
        }
    },
}));

export default usePostStore;
