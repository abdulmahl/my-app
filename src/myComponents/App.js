function MyButton() {
    return (
        <button type="submit">I am a button</button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app!</h1>
            <MyButton/>
        </div>
    );
}