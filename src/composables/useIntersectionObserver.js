import { ref, onMounted, onUnmounted } from 'vue';

export function intersectionObserver(callback, options = {}) {
  const isIntersecting = ref(false);
  const observedElement = ref(null);
  let observer;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        isIntersecting.value = entry.isIntersecting;
        if (callback) callback(entry);
        // Apply the class for the fade-in and translation effect
        if (observedElement.value) {
          if (entry.isIntersecting) {
            observedElement.value.classList.add('fade-in-up');
          } else {
            observedElement.value.classList.remove('fade-in-up');
          }
        }
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
