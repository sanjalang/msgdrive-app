// MsgDrive 示範用的程式碼檔(虛構資料)
interface Note {
  id: number;
  title: string;
  tags: string[];
}

const notes: Note[] = [
  { id: 1, title: '買菜清單', tags: ['生活'] },
  { id: 2, title: '讀書筆記', tags: ['學習', '閱讀'] },
];

export function findByTag(tag: string): Note[] {
  return notes.filter((note) => note.tags.includes(tag));
}

console.log(findByTag('學習').map((note) => note.title));
