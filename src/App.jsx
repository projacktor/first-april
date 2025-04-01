import confetti from 'canvas-confetti'
import "./App.css"

function App() {
    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0, y: 0 },
            colors: ['#ff0000', '#00ff00', '#0000ff'],
        });

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 1, y: 0 },
            colors: ['#ff0000', '#00ff00', '#0000ff'],
        });

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0, y: 1 },
            colors: ['#ff0000', '#00ff00', '#0000ff'],
        });

        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 1, y: 1 },
            colors: ['#ff0000', '#00ff00', '#0000ff'],
        });
    }
    return (
        <article className="space-y-4 flex flex-col items-center justify-center">
            <h1 className="text-4xl text-black font-bold">Подозрительная активность</h1>
            <h2 className="text-xl w-96 md:w-full text-gray-500">
                Наши системы заметили в вашем профиле нетипичное поведение, и теперь мы хотим убедиться, что всё в
                порядке.
            </h2>

            <h2 className="text-xl w-96 md:w-full text-gray-500">
                Пожалуйста, зарядитесь хорошим настроением на этот день. С первым апреля!
            </h2>

            <button
                className="text-xl bg-blue-500 text-white font-bold py-4 px-6 mt-12 rounded-xl hover:bg-blue-700 transition duration-300"
                onClick={triggerConfetti}
            >
                Пройти проверку
            </button>
        </article>
    )
}

export default App
