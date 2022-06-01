<template>
  <div class="modal" :class="{ 'is-active': modelValue }">
    <div class="modal-background"></div>
    <div ref="cardRef" class="modal-card px-4">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button @click="$emit('cancel')" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <slot />
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <slot name="buttons">
          <button @click="$emit('cancel')" class="button">Cancelar</button>
          <button @click="$emit('accept')" class="button is-success">Aceptar</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Default title",
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "accept", "cancel"]);

const cardRef = ref(null);
onClickOutside(cardRef, () => emit("update:modelValue", false));
</script>

<style lang="scss" scoped></style>
