const registerTodo = document.getElementById("addTodo").onclick = ((e) => {
    e.preventDefault()
    console.log('clicked')

    const theTodo = document.getElementById("todo").value;

    console.log(theTodo);
    var randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 8)

    var todoRef = db.collection("todoList").doc(randomString);

    // Atomically add a new item to the "todos" array field.
    // todoRef.update({
    //     allTodo: firebase.firestore.FieldValue.arrayUnion(theTodo),
    //     checked: false
    // })   

    todoRef.set({
        id: randomString,
        myTodo: theTodo,
        checked: false
    })   
})


// todoRef.update({
//     regions: firebase.firestore.FieldValue.arrayRemove("east_coast")
    
// });
