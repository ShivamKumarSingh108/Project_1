// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/auth_demo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Import User and Order models
const User = require('./models/User');
const Order = require('./models/Order');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files



// Routes
app.get('/', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});
app.get('/pay', (req, res) => {
    res.render('pay');
});

app.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            password: hashedPassword
        });
        await user.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error registering user');
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.render('login', { error: 'Invalid username or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.render('login', { error: 'Invalid username or password' });
        }
        res.render('home', { username });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error logging in');
    }
});

app.post('/insertData1', async (req, res) => {
    try {
        const { username, item } = req.body;
        const order = new Order({

            username: 'Breakfast',
            item: '1'
        });
        await order.save();
        res.send('Order placed successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error placing order');
    }
    
});
app.post('/insertData2', async (req, res) => {
    try {
        const { username, item } = req.body;
        const order = new Order({

            username: 'Appetizers',
            item: '1'
        });
        await order.save();
        res.send('Order placed successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error placing order');
    }
    
});
app.post('/insertData3', async (req, res) => {
    try {
        const { username, item } = req.body;
        const order = new Order({

            username: 'Drinks',
            item: '1'
        });
        await order.save();
        res.send('Order placed successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error placing order');
    }
    
});
app.post('/insertData4', async (req, res) => {
    try {
        const { username, item } = req.body;
        const order = new Order({

            username: 'MahaRaja Thali',
            item: '1'
        });
        await order.save();
        res.send('Order placed successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error placing order');
    }
    
});
app.post('/insertData5', async (req, res) => {
    try {
        const { username, item } = req.body;
        const order = new Order({

            username: 'Kadai paneer',
            item: '1'
        });
        await order.save();
        res.send('Order placed successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error placing order');
    }
    
});
app.post('/insertData6', async (req, res) => {
    try {
        const { username, item } = req.body;
        const order = new Order({

            username: 'Egg Ramen',
            item: '1'
        });
        await order.save();
        res.send('Order placed successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error placing order');
    }
    
});
app.post('/insertData7', async (req, res) => {
    try {
        const { username, item } = req.body;
        const order = new Order({

            username: 'Biryani',
            item: '1'
        });
        await order.save();
        res.send('Order placed successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error placing order');
    }
    
});
app.post('/insertData8', async (req, res) => {
    try {
        const { username, item } = req.body;
        const order = new Order({

            username: 'Palak paneer',
            item: '1'
        });
        await order.save();
        res.send('Order placed successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error placing order');
    }
    
});
app.post('/insertData9', async (req, res) => {
    try {
        const { username, item } = req.body;
        const order = new Order({

            username: 'Rice & Redfish ',
            item: '1'
        });
        await order.save();
        res.send('Order placed successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error placing order');
    }
    
});
app.post('/insertData10', async (req, res) => {
    try {
        const { username, item } = req.body;
        const order = new Order({

            username: 'Shrimp & Rice',
            item: '1'
        });
        await order.save();
        res.send('Order placed successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error placing order');
    }
    
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
