This is a simple React app for calculating a grocery list based on an provided budget and a list of products with detail information. It's powered by [Creat React App](https://facebook.github.io/create-react-app/), so you can run command like `npm run start` or `npm run build` after install its dependencies. It's for training-purpose only.

### USAGE:
1. Enter your expected budget.
2. Register your list of products with detail information. Notice the **User Precision** field. You can only select value '1' for products like egg, pencil but you can select '0.1' for product like meat (0.1kg)
3. Your product priority matters. Register the most important one first. 
4. You can change information of or delete any product. After that click the **Calculate** button.
5. Product appears started with maximum amount. Adjust them to make following products appear. Notice that change one's amount also changes the minimum and maximum amount of the following ones. Keep making changes until you see all of your list appeared.