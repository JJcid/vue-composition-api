<template>
  <add-edit-note v-model="content">
    <template #buttons>
      <button @click="router.back" class="button has-background-warning-light mr-2">
        Cancelar
      </button>
      <button
        @click="updateNote"
        :disabled="!content"
        class="button has-background-warning-light"
      >
        Guardar nota
      </button>
    </template>
  </add-edit-note>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStoreNotes } from "../store/storeNotes";
import AddEditNote from "../components/Notes/AddEditNote.vue";

/**
 * Props
 */
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

/**
 * Router
 */
const router = useRouter();

/**
 * Store
 */
const storeNotes = useStoreNotes();
const note = storeNotes.getNoteById(props.id);
const content = ref(note.content);
const updateNote = () => {
  storeNotes.updateNote(props.id, content.value);
  router.back();
};
</script>

<style lang="scss" scoped></style>
