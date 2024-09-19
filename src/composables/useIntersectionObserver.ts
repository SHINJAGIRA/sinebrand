import { ref, onMounted, onUnmounted } from 'vue';

export function intersectionObserver(callback: IntersectionObserverCallback, options: IntersectionObserverInit = {}) {
  const isIntersecting = ref(false);
  const observedElement = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isIntersecting.value = entry.isIntersecting;
        if (callback) callback([entry], observer);
      });
    }, options);

    if (observedElement.value) {
      observer.observe(observedElement.value);
    }
  });

  onUnmounted(() => {
    if (observedElement.value) {
      observer.unobserve(observedElement.value);
    }
    observer.disconnect();
  });

  return { isIntersecting, observedElement };
}
