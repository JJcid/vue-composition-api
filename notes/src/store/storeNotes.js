import { defineStore, acceptHMRUpdate } from 'pinia'

export const useStoreNotes = defineStore('notes', {
  state: () => {
    return {
      notes: [{
        id: "id1",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem saepe,
              molestias autem voluptatem tempore porro necessitatibus voluptatibus quasi
              repudiandae fugit ea distinctio. Amet voluptas architecto doloremque cupiditate
              distinctio necessitatibus?`,
      },
      {
        id: "id2",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem saepe,
              molestias autem voluptatem tempore porro necessitatibus voluptatibus quasi
              repudiandae fugit ea distinctio. Amet voluptas architecto doloremque cupiditate
              distinctio necessitatibus?`,
      },
      {
        id: "id3",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem saepe,
              molestias autem voluptatem tempore porro necessitatibus voluptatibus quasi
              repudiandae fugit ea distinctio. Amet voluptas architecto doloremque cupiditate
              distinctio necessitatibus?`,
      },]
    }
  },
  getters: {
    getNoteById: state => id => state.notes.find(note => note.id === id),
    getTotalCharactersOfAllNotes: state => state.notes.reduce((counter, note) => counter += note.content.length, 0)
  },
  actions: {
    addNote (content) {
      this.notes.unshift({
        id: new Date().getTime().toString(),
        content,
      });
    },
    updateNote (id, content) {
      const note = this.notes.find(note => note.id === id);
      note.content = content;
    },
    deleteNote (id) {
      this.notes = this.notes.filter((note) => note.id != id);
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot))
}