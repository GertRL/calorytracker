const ItemCtrl = (function () {
    const Item = function (id, name, calories) {
        this.id = id
        this.name = name
        this.calories = calories
    }

    const data = {
        items: [
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 1, name: 'Cookie', calories: 400},
            {id: 2, name: 'Eggs', calories: 300}
        ],
        total: 0
    }
    return{
        getItems: function (){
            return data.items
        },
        logData:function (){
            return data
        }
    }
})();

    const UICtrl = (function (){
        const UISelectors = {
            itemList: '#item-list',
            itemNameInput: '#item-name',
            itemCaloriesInput: '#item-calories',
            addBtn: '.add-btn'
        }
    return {
        populateItemList: function (items){
            let html = '';
            items.forEach(function (item){
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
                </li>`;
            });
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getSelectors: function (){
            return UISelectors;
        }
        getItemInput: function (){
            return {
                name:document.querySelector(UISelectors.itemNameInput).value,
                calories:document.querySelector(UISelectors.itemCaloriesInput).value
            }
        }
    }

})();

const App = (function(ItemCtrl,  UICtrl ) {
    const loeadEventListeners = function (){
        const UISelectors = UICtrl.getSelectors();
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    }
    const itemAddSubmit = function (event){
        const input = UICtrl.getItemInput()
        console.log('input')
        event.preventDefault()
    }
    return {
        init: function (){
            console.log('Initializing App')
            const items = ItemCtrl.getItems()
            UICtrl.populateItemList(items)
            loeadEventListeners();

        }
    }
})(ItemCtrl,UICtrl)

App.init()
