# GhorKuno
this is a virtual marketplace to empower the small entrepreneurs to start their business without any hassle. This is a platform of selling homemade foods to the potential clients. This application's frontend was designed using React and the backend was designed in python Django REST framework. 

**GUI Screenshots**
![image](https://user-images.githubusercontent.com/45464612/202830923-5851209f-66e0-4ce0-b46b-f9e1c879be86.png)
![image](https://user-images.githubusercontent.com/45464612/202830925-a653ee9d-6cb6-43c9-a41e-a9d1ae5abd36.png)
![image](https://user-images.githubusercontent.com/45464612/202830927-dfc8095c-f666-44f7-896b-1d95d488c412.png)
![image](https://user-images.githubusercontent.com/45464612/202830930-378d67a3-321b-4d46-9b88-bfd8d9177469.png)


# **Introduction**

Bangladesh is a country where a huge majority of women are forced to remain at home and are subject to unpaid labor. According to a recent survey, more than 85% of the female population have been doing unpaid labor, mainly cooking food or cleaning at home for the family. Often these women have a keen passion for cooking or making handicrafts but they do not have the infrastructure or guidance to utilize their interests in a productive way.

The project we have designed is a marketplace application that will create a platform to empower these very entrepreneurs that we have discussed. The prime objective of this application was to make people able to start doing business without any kind of hassle such as doing marketing, packaging and delivering, and promoting to get customers. So, technically we are building the infrastructure of their business and maintaining it beforehand. All they need to do is to open and start selling their products through our application. This marketplace will be focused on selling homemade products such as homemade food, homemade artifacts, and other stuff like this. The main target audience of this application or the Marketplace are students or the kind of people who are more inclined toward products that are made at home.

This system will be registering sellers against their NID and address location through a specialized process. Due to this reason, there is no chance of having fake or forged accounts. After opening an account a seller will have to be verified through a monitoring process where we will certify the seller as a good cook if they are registering to sell food products. Every seller will have a rating star; these reviews will be done by the customers. If a seller has a higher number of rating stars they will be getting more orders. Also, the amount of commission they pay us will be lesser than a general seller. Currently, in the market, there are so many applications like this. But none of the applications are targeting the sellers who are trying to sell their products from home like food and they are not being able to serve the customers who are trying to buy homemade foods, arts, crafts, etc.

So this is a great chance for us to get popular in the market and earn a great reputation.

Like every other project, this one also had to face numerous amount of hurdles. The prime obstacle was to certify a seller who is trying to register as a cook. To tackle this problem we introduced the idea of paying a suitable amount of money to register to sell food items and monitoring the first few Orders and their reviews. If the reviews are bad then the user won't be able to register as a cook and they won't be able to sell any kind of food products, moreover, the money will not be refunded. On the other hand, if the reviews are better then we will certify them to sell their food products while refunding the amount of money which was paid. Another problem was the packaging system, to tackle this we had the idea of sending particular kinds of packages matching the type of the order. The delivery man will be providing the packets during receiving the order from the seller. The seller will pack the item properly and next it will be delivered to the desired location. Another problem was making sure the seller is providing a quality product, to solve this problem we came up with the idea of monetary penalty. If a bad product is served The seller will have to penalize by a certain amount of money from the current account.

The last problem was preventing the sellers from selling outside the system. The process we followed to tackle this problem is not letting the customers contact the sellers directly. All the orders will be processed through our system and we will receive the order and deliver it to the customer. Neither the seller nor the customer will come in direct contact.

Lastly, we can say, evidently this platform will create an immense amount of opportunities for people who are trying to become independent economically by starting their small business and those who are trying to initiate their startup on a small scale. Also, This system will turn an idle kitchen into an earning source.

# **Non-Functional Requirements**

1. Product Requirements:

**Usability** : This system has to be user-friendly and less complicated to use.

**Efficiency** : The performance of the application should be good enough algorithmically and the memory management should be intelligent. Because our system cannot afford too much time in the data processing. Also, it needs a huge amount of space to store data

**Dependability** : The system should be built in a way where clients can depend undoubtedly in terms of security and authenticity.

**Security** : There should be no security flaws or vulnerabilities in the system as our system comprises confidential information. One user should not be able to access another user's record. Also, the payment gateway should be secured enough to make sure the money is not getting stolen or lost due to any system failure.

2. Organizational Requirements:

**Environmental** : The system should be built in such a way that it maximizes the usages of the CPU and servers to perform its operation which impacts the environment less physically and saves energy.

**Operational** : The system should be built in a way that there is a hierarchy of users and different levels of views for the database. Because there are different types of users. All the operators should not have the same kind of access to the database and the system.

3. External Requirements:

**Regulatory** : The system should abide by the laws of Bangladesh and follow the ICT acts in order to ensure transparency.

**Ethical** : The system needs to be built in a way that there is no backdoor for gaining access and acquiring raw data to use for personal benefits.

**Legislative** : The system should be strong enough to maintain the preserved data and ensure the security and safety of the accounts. Also, user privacy policies should be followed when developing the system.

# **Functional requirements**

The functional requirements of this system are easy to implement but a tough job to ensure proper security and maintain privacy as well as authenticity. All the functional requirements are listed in brief below.

| 1 | Sign up for sellers and customers |
| --- | --- |
| 2 | Login for both seller and customer |
| 3 | Password resetting option for both seller and customer |
| 4 | To register as a seller, one must upload his/her NID number, phone number, instantly captured photo and location along with home address. |
| 5 | To register as a customer one must verify the mobile phone number through 2FA otp system |
| 6 | A landing page where the most popular and recent items are shown |
| 7 | Search box to enter the name of the item customer is looking for |
| 8 | Side panel for item category |
| 9 | Cart management system to add item |
| 10 | Payment gateway to make transaction |
| 11 | Product review system |
| 12 | Customers can review a product and give rating |
| 13 | Customers can comment on a product after they receive the order |
| 14 | Sellers cannot contact directly with the customers they can only see the review comments and ratings |
| 15 | Sellers can maintain individual virtual shops which will be consisted of the items they are selling |
| 16 | The profile shops will not have any physical address or contact info visible to customers |
| 17 | Sellers will be able to see their supply and earn summary |
| 18 | Customers will be able to see their order history |
| 19 | A monthly subscription plan would be added for students by which they can avail daily homemade food from any home cooks of their choice. |
| 20 | A Tiffin carrier system will be added by which housewives can send freshly cooked homemade food for their service-holder husbands or other relatives in their office. |
| 21 | Some specialty food items of Bangladesh like Chom-Chom of Tangail or Doi of Bogura can be ordered by the customers and those items will be delivered from the actual original place of making to the customers within 24-48 hours. |

# **Technologies**

· **Programming Languages**

The programming languages used to build this system are Python and Javascript. Along with this SQL, markup language like HTML and styling scripts were used.

· **Client-side**

In the case of the front-end technology we used Javascript modern library React for robustness and versatility. React is extremely flexible and reusable which omits unwanted redundancy.

· **Server-side**

For this project we have used python as the backend programming language. Here we used Django as the web framework which enables rapid development with security

Another prime reason for using python is it provides a wide variety of support in the case of implementing Artificial intelligence and machine learning. If in the future we want to add any feature that needs some kind of support then python is the best language to work with.

· **Communication**

The client-side and server-side communication will take place through Django API and the routing will be done in that correspondence.


