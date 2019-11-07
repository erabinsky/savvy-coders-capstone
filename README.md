#reServe


##Before Savvy Coders?

I have diverse experience in a number of areas and disciplines, including a bachelor’s degree in linguistics, extensive experience in food service, and teaching. Immediately before starting Savvy Coders, I was managing 5 nutrition programs for a non-profit that serves as both a senior center and affordable housing for low-income older adults.

##Interest in Coding
When I began working in social services, among the initiatives that I took upon myself was to digitize and automate a number of handwritten procedures for which I was responsible. Among those procedures was a meal reservation system, which was being done with a 5lb binder containing reservation lists for each day of the month, with accompanying handwritten notes. Aside from the inherent challenges of completely uploading a system from a physical location to a shared drive, there were a number of accessibility concerns, as well.
First, I needed to develop the reservation system in such a way that it would be intuitive for my coworkers to use.

The reservation sheets also needed to be printed each evening to be used as attendance sheets by older adult volunteers, so I needed to maintain their existing format so that the sign-in process would still be intuitive for clients to use and volunteers to manage.

Within a couple of months, I was able to create an interactive network of Excel workbooks that not only saved hours a day of work being done manually in a binder, but also went further in consolidating and automating reporting processes by exporting reservation and attendance data.

Eventually, the reservation system that I implemented began working so smoothly that I was able to pass it off to the receptionists at the front desk and maintain a supervisory consulting role in its operation when needed.

The process of conceiving, designing, developing, testing, re-designing, implementing user (i.e. co-workers) input and feedback, and eventually watching my system succeed and receive buy-in was a thrill for me! It was at that point that I considered programming as a next-step in my career.

While the meal reservation project that I worked on at my last job was an overall success, it did have some inherent limitations by being solely based in Excel without macros. Managing an institutional dinner program, I had several clients who would make reservations on a regular basis, but in a method that proved difficult to keep up with on a large scale. For example, one client might want to come to dinner every Monday and Wednesday ongoing, but not on days when red meat is being served. Another client might want to come to dinner every day that fish is being served, regardless of which day it was being served. The app that I am developing solves several problems:
It allows clients, whether making reservations on their own, through a caretaker, or an office administrator, the flexibility to reserve meals that meet their needs and preferences, and the reassurance of receiving instant confirmation of their reservations.
It allows clients or their caretakers to make reservations on their own, rather than necessarily rely on office administrators to do it for them. This not only fosters a sense of agency among the clients, it also saves a lot of time for office administrators.
It provides administrators an easy platform to view reservations by client and date, giving a real-time tool to manage logistics for each meal in advance.
It creates a central repository for reservations, so no matter who is working or making reservations, client preferences, restrictions, and reservations are up-to-date, accurate, and easy to find.

Aside from efficiency, the main benefit of this app is the contribution it makes towards the quality of life for older adults by enabling them to retain dignity through independence. A key indicator of wellbeing among seniors is the ability to dine socially. A streamlined approach to meal reservations for older adults facilitates consistent participation in social activities, and frees-up both seniors and administrators to focus on fostering good health and prosperity in the process of aging.



#Design Architecture
My project is being designed mobile first in order to put the service straight into the clients’ hands. As reservations are made using client and admin profiles, I am building a back-end with Firebase to create and store login credentials. Firebase will also be used to load daily menus into the back end, and JavaScript will be used to create classes for clients and allow them to interact with menus. Menus will be formatted as JSON files, and client profile classes in JavaScript will contain key-value pairs indicating whether their preferences match with selected menus. JavaScript will also be used to populate a reservation and sign-in list, which will then be executed on screen as an expedited two-touch “signature” process (one touch next to the client’s name, another touch to confirm attendance). I have additional plans to expand the project beyond this timeframe, such as extending it to facilitate home delivery (i.e. Meals on Wheels) by accessing the Google Maps API to route delivery drivers to clients’ homes, and also the Google Calendars API to mark reservations in clients’ calendars.



##The Value of Savvy Coders
I have always valued creativity and fast-paced problem solving, both traits which I have identified as prevalent among successful programmers and web developers. Through programming, I seek to creatively solve problems and improve lives, and I am hopeful that my hard work in Savvy Coders translates to marketable skills necessary to be hired in the competitive field of programming.


