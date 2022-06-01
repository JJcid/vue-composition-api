<template>
  <div class="p-4 mb-5 has-background-warning">
    <div class="field">
      <div class="control">
        <textarea
          ref="textareaRef"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="textarea"
          placeholder="Añade el texto de la nota..."
          :maxlength="100"
          v-autofocus
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

/**
 * Exposed methods
 */
const textareaRef = ref(null);
const focus = () => textareaRef.value.focus();
defineExpose({
  focus,
});
</script>

<style lang="scss" scoped></style>
