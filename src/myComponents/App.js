import { useState } from 'react';

//? How to create and nest components.
function MyButton() {
    return (
        <button type="submit">
            I am a button
        </button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app!</h1>
            <MyButton />
        </div>
    );
}

//? How to add markup and styles.
function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
            {/* Adding markups and styles */}
            <img className="avatar" />
        </>
        
    );
}


//?  Displaying data 
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default function profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img 
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}

//? Rendering conditions
let content;
if(isLoggein) {
    content = <Adminpanel />
} else {
    content = <Loginform />
}

return (
    <div>
        content
    </div>
);

//? Using the ? operator instead of if stmt.

<div>
    {isLoggedin ? ( 
        <Adminpanel />
    ) : ( 
        <Loginform />
    )}
</div>

//?When you don't have an else stmt you can use the and condition.
return (
    <div>
        {isLoggedin && <Adminpanel />}
    </div>
)

//? Rendering List.
const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

//? Inside the products component use the map() function to turn
//? the array to aanarray of <li></li>.
const listItems = products.map(product => 
    <li key={product.id}>
        {product.title}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    </li>
);

return (
    <ul>
        {listItems}
    </ul>
);

//? Responding to events. declaring event handler functions.
function MyButton() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

//? Updating the screen.
function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

//? Using hooks.

