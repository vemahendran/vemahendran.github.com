# layout-using-backbone

Done for an interview question.

Application layout							     Max Time: 3 working days


Build a basic product layout for web application to support following features

•	Contains main navigation

•	Contains sub navigation

•	Resizable cells to separate content

•	Draggable containers that can be moved around and snapped to provide portal functionality.


### Functional Requirements:
1.	This page has two tabs View and Edit. The view tab is what you see above.
2.	This tab contains the “person details” container which displays the details about a person.
3.	On clicking the edit button, the user is taken to the Edit tab.
4.	The Edit tab contains a form with fields as name, email, phone and description, along with a Save button. These fields are prefilled with the details shown in the person details container.
5.	When the user makes any modifications to this form and clicks on the save button, the details must be reflected in the person details container. (For eg. If I change name John to Paul, the person details container should show Name: Paul)
6.	You can use Backbone or any other javascript framework to implement this.

### Layout Requirements:
1.	The layout should occupy the whole page.
2.	Layout contains two main navigation buttons MainA, MainB, default MainA is selected on page load.
3.	Layout contains 4 cells cell-top, cell-left, cell-right, cell-center. There is a resizable vertical splitter between cell-left and cell-right. When clicked on splitter we should be able to resize the two cells it is separating.
4.	Cell-left contains sub navigation for main-A, by default main-A-Sub1 will be selected on page load and all the respective containers (MainA-Container1, MainA-Container2, MainA-Container3, MainA-Container4) display the content as shown in figure. Cell-right should display content show in figure.
5.	All the containers should be fixed in size (height and width) and they should be draggable and rearranged inside cell-center like a portal.
6.	Please make appropriate assumptions if any of the requirements are not clear. We are expecting only a basic UI. Don’t spend too much time on making it look nice.
7.	Try to complete as much functionality as you could.

