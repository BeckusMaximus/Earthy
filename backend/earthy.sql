    CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    category_id INTEGER,
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    image_link VARCHAR(255),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE categories (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE reviews (
    id INTEGER PRIMARY KEY,
    product_id INTEGER,
    name TEXT NOT NULL,
    review_text TEXT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    product_id INTEGER,
    user_id INTEGER,
    email TEXT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL ,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO categories (name) VALUES ('Kitchen');
INSERT INTO categories (name) VALUES ('Bathroom');
INSERT INTO categories (name) VALUES ('Selfcare');

INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Wood cutlery','Embrace sustainability with our elegant wood cutlery set. Crafted from responsibly sourced wood, these utensils are perfect for any meal, offering a biodegradable alternative to plastic.', 35.99, 100, 'https://images.unsplash.com/photo-1557687790-902ede7ab58c?q=80&w=1298&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Glas jar set','Store your pantry essentials in style with our glass jar set. These durable, reusable jars are perfect for keeping your food fresh while reducing your plastic usage.', 20.50, 100, 'https://images.unsplash.com/photo-1559837957-bab8edc53c85?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1);

INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Recycled pouch','Keep your small essentials organized with our recycled small pouch. Made from upcycled materials, this handy pouch features a convenient string closure, perfect for eco-conscious living.', 2.50, 100,'https://images.unsplash.com/photo-1615485925706-8f0289e9f11c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Brown tote bag','Carry your groceries or daily essentials in our sturdy brown tote bag. Made from natural fibers, this reusable bag is a chic and sustainable alternative to single-use plastic bags.', 9.99, 100, 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Organic Coffee','Enjoy the rich, full-bodied flavor of our organic coffee. Sourced from sustainable farms, our coffee is not only delicious but also supports eco-friendly farming practices.', 8.20, 100, 'https://images.unsplash.com/photo-1599639932525-213272ff954b?q=80&w=1088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Multi-purpose spray','Clean your home with our eco-friendly multi-purpose spray. Formulated with natural ingredients, this versatile spray tackles dirt and grime without harming the environment.', 13.90, 100, 'https://images.unsplash.com/photo-1624377166852-776794be17f5?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Cleaning spray refills','Reduce waste with our cleaning spray refills. Packaged plastic-free, these refills offer an environmentally friendly way to keep your home spotless while minimizing your plastic footprint.', 6.89, 100, 'https://images.unsplash.com/photo-1624377262016-0df7aba7f708?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 1);

INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Bathroom cleaning spray','Keep your bathroom sparkling clean with our eco-friendly bathroom cleaning spray. Formulated with natural ingredients, this powerful cleaner tackles tough stains while being gentle on the environment.',13.90, 100, 'https://images.unsplash.com/photo-1624377225030-f0bb343eaa4d?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 2);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Reusable cotton pads','Make your skincare routine sustainable with our reusable cotton pads. Soft, durable, and easy to clean, these pads are perfect for applying toner, removing makeup, and more, eliminating the need for single-use cotton pads.', 12.99, 100, 'https://images.unsplash.com/photo-1588959570984-9f1e0e9a91a6?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 2);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Homemade soap','Treat your skin to the natural goodness of our homemade soap. Handcrafted with organic ingredients, each bar provides a gentle, moisturizing cleanse, free from harsh chemicals and artificial fragrances.', 6.86, 100, 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 2);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Homemade soap 4-pack','Enjoy a variety of scents and benefits with our homemade soap 4-pack. Each set includes four handcrafted bars, made with organic ingredients, perfect for gifting or indulging in a luxurious bathing experience.', 20, 100, 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 2);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Bamboo toothbrush','Take a step towards a greener planet with our bamboo toothbrush. Featuring a biodegradable bamboo handle and soft bristles, this toothbrush provides an effective and eco-friendly way to maintain oral hygiene.', 3.25, 100, 'https://images.unsplash.com/photo-1553691158-91a7f9183156?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 2);

INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Organic coconut body oil','Nourish your skin with our organic coconut body oil. Rich in natural antioxidants and moisturizing properties, this body oil leaves your skin feeling soft, smooth, and radiant.', 18.79, 100, 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 3);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('SPF 50 body sunscreen','Protect your skin with our SPF 50 body sunscreen. Made with natural, reef-safe ingredients, this sunscreen provides broad-spectrum protection while being gentle on your skin and the environment.', 14.99, 100, 'https://images.unsplash.com/photo-1598662972299-5408ddb8a3dc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 3);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Bamboo makeup brushes set','Enhance your beauty routine with our bamboo makeup brushes set. Crafted with sustainable bamboo handles and soft, synthetic bristles, these brushes offer precise application while being kind to the planet.', 35.50, 100, 'https://images.unsplash.com/photo-1633878353784-8c6182fc93fd?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 3);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Bamboo hairbrush','Detangle your hair effortlessly with our bamboo hairbrush. Designed with natural bamboo bristles, this brush gently massages your scalp, promoting healthy hair and reducing environmental impact.', 17.10, 100, 'https://images.unsplash.com/photo-1633878353926-7a98d66aa6da?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 3);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Metal razor with razor blades + pouch','Experience a smooth, sustainable shave with our metal razor. This reusable razor comes with razor blades and a convenient pouch, offering a zero-waste alternative to disposable razors.', 39.20, 100, 'https://images.unsplash.com/photo-1629261755114-1a3e476163b8?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 3);
INSERT INTO products (name, description, price, stock, image_link, category_id) VALUES ('Restorative hair mask','Revitalize your hair with our restorative hair mask. Made with nourishing, organic ingredients, this hair mask deeply conditions, repairs damage, and leaves your hair feeling soft and healthy.', 21.35, 100, 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 3);



