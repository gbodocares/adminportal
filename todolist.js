// db.collection("todoList").get().then((querySnapshot) => {
//      var todos = [];
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//         todos.push(doc.data());
//         console.log(todos)
//         let todosDisplay = todos.map((td) => {
//             return `<div>
            
               
//                 <div class="form-check">
//                 <label class="form-check-label">
//                     <input class="checkbox" type="checkbox"> ${td.myTodo.map((ts) => {
//                         return `
//                             <li>
//                                 <div class="form-check">
//                                     <label class="form-check-label">
//                                     <input style="color: teal;" class="checkbox" type="checkbox">${ts}</label>
//                                 </div>
//                                 <i class="remove mdi mdi-close-circle-outline" onclick="${function(){
//                                     db.collection("todoList").doc(randomId).delete().then(() => {
//                                     swal({
//                                         title: 'Account Delete',
//                                         text: 'Account deleted successfully',
//                                         icon: 'success',
//                                         button: 'Reload Page'
//                                     }).then(function(){
//                                         window.location.reload();
//                                     })
//                                 }).catch((error) => {
//                                     console.error("Error removing document: ", error);
//                                 });
//                                 }}"></i>
//                             </li>
//                         `
//                     }).join(' ')}
//                 </div>
               
//             </div>
//             `
//         }).join('  ')

//         document.getElementById('todoResult').innerHTML = todosDisplay;
//     });
// });



db.collection("todoList").get().then((querySnapshot) => {
    var todos = [];
   querySnapshot.forEach((doc) => {
       // doc.data() is never undefined for query doc snapshots
       console.log(doc.id, " => ", doc.data());
       todos.push(doc.data());
       console.log(todos)
       let todosDisplay = todos.map((td) => {
       
           return `<div>
           
              
               <div class="form-check">
                    <label class="form-check-label">
                    <li><input class="checkbox" style="color: teal;" type="checkbox"> ${td.myTodo}
                               
                        <i class="remove mdi mdi-close-circle-outline" onclick="${removeTodo()}"></i>
                    </li>

               </div>
              
           `
       }).join('  ')

       document.getElementById('todoResult').innerHTML = todosDisplay;
   });
});