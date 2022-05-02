//004 Composición y colocación del estado en React.mp4

import React from 'react';
function App() {
  //El siguiente esatdo es el que sera compartido de manera global(por decirlo asi) gracias a la composision y a la colocacion del estado.
  const [state, setState] = React.useState('estad compartido');
  return (
    <>
      {/* La composision de componente es estrocturar los mismos en forma de cadena logica */}
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>

      <TodoList>
        {/* La colocacion del estado es colocar en el ultimo(o en el necesario) componente de la composision el estado. De esta manera no hay varios props intermediarios*/}
        <TodoItem state={state} />
      </TodoList>
    </>
  );
}

function TodoHeader({ children }) {
  return <header>{children}</header>;
}

function TodoList({ children }) {
  return <section className="TodoList-container">{children}</section>;
}

function TodoCounter() {
  return <p>TodoCounter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}

function TodoItem({ state }) {
  return <p>TodoItem: {state}</p>;
}
