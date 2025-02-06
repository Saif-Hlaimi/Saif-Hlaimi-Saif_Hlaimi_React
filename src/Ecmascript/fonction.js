let lastId = 0;

const Tab = [
    { id: ++lastId, name: "Alice" },
    { id: ++lastId, name: "Bob" },
];

const addEntry = (name) => {
    Tab.push({ id: ++lastId, name });
};

const searchById = (id) => {
    return Tab.find(item => item.id === id);
};

export { searchById, addEntry, Tab };
