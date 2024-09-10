## Tables
**Users**
- id, email, password, type<Enum<admin, buyer, seller>>, verified<default false>
**Products**
- id, name, price, userId, isFeatured:false
**Orders**
- id, productId, userId,totalOrderPrice, status
**Categories**
- id, productId
**Reviews**
 - id, userId, productId, reviews<Text>

# database
username: postgres
password: 2497