import { ref } from 'vue'

const useCounterHook = (initialValue) => {
    const counter = ref(initialValue)
    const increaseCounter = () =>  {
        counter.value++;
    }

    const decreaseCounter= () =>  {
        counter.value--;
    }

    return {
        counter,
        increaseCounter,
        decreaseCounter
    }
}

export default { useCounterHook }