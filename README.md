# Flask Todo Application

A simple, elegant Todo list application built with Flask and Bootstrap. This web application allows users to create, read, update, and delete todo items with a clean and responsive interface.

## Features

- ✅ **Create Todos**: Add new todo items with title and description
- 📖 **View Todos**: Display all todos in a organized table format
- ✏️ **Update Todos**: Edit existing todo items
- 🗑️ **Delete Todos**: Remove completed or unwanted todos
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Bootstrap UI**: Clean and modern user interface
- 🔒 **Data Persistence**: SQLite database for reliable data storage

## Screenshots

### Main Todo List
- Clean table layout showing all todos
- Action buttons for each todo item
- Form to add new todos
- Responsive Bootstrap design

### Update Todo
- Pre-filled form with existing todo data
- Easy editing interface
- Cancel option to return without changes

## Technology Stack

- **Backend**: Flask (Python web framework)
- **Database**: SQLite with SQLAlchemy ORM
- **Frontend**: HTML5, Bootstrap 5, JavaScript
- **Styling**: Custom CSS with Bootstrap components

## Installation & Setup

### Prerequisites
- Python 3.7 or higher
- pip (Python package manager)

### Step 1: Clone or Download
```bash
# If using git
git clone <repository-url>
cd flask-todo-app

# Or download and extract the files
```

### Step 2: Install Dependencies
```bash
pip install flask flask-sqlalchemy
```

### Step 3: Project Structure
Ensure your project structure looks like this:
```
flask-todo-app/
├── app.py
├── static/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
└── templates/
    ├── index.html
    └── update.html
```

### Step 4: Run the Application
```bash
python app.py
```

The application will start on `http://127.0.0.1:8000`

## Usage Guide

### Adding a Todo
1. Fill in the "Todo To Add" field with your task title
2. Add a description in the "Description" field
3. Click the "Submit" button
4. Your todo will appear in the table below

### Updating a Todo
1. Click the "Update" button next to any todo item
2. Modify the title or description as needed
3. Click "Update Todo" to save changes
4. Or click "Cancel" to return without changes

### Deleting a Todo
1. Click the "Delete" button next to any todo item
2. Confirm the deletion when prompted
3. The todo will be permanently removed

## File Descriptions

### Backend Files
- **`app.py`**: Main Flask application with routes and database models
- **`project.db`**: SQLite database file (auto-created on first run)

### Frontend Files
- **`templates/index.html`**: Main page template with todo list and form
- **`templates/update.html`**: Update page template for editing todos
- **`static/css/style.css`**: Custom CSS styles
- **`static/js/script.js`**: JavaScript for interactivity and validation

## Database Schema

### Todo Model
- **index**: Primary key (Integer)
- **title**: Todo title (String, required)
- **desc**: Todo description (String, required)
- **date_of_creation**: Timestamp (DateTime, auto-generated)

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET, POST | Main page - display todos and handle new todo creation |
| `/update/<int:index>` | GET, POST | Update specific todo item |
| `/delete/<int:index>` | GET | Delete specific todo item |

## Customization

### Styling
- Modify `static/css/style.css` to change the appearance
- Bootstrap classes can be customized in the HTML templates
- Color scheme and layout can be adjusted as needed

### Functionality
- Add new fields to the Todo model in `app.py`
- Extend the HTML forms to include additional inputs
- Implement categories, priorities, or due dates

### Database
- Switch from SQLite to PostgreSQL or MySQL for production
- Add user authentication for multi-user support
- Implement todo categories or tags

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Change the port in app.py
app.run(debug=True, port=8001)  # Use different port
```

**Database errors:**
```bash
# Delete the database file and restart
rm project.db
python app.py
```

**Template not found:**
- Ensure `templates/` folder exists
- Check file names match exactly
- Verify folder structure

**Static files not loading:**
- Ensure `static/` folder exists
- Check file paths in HTML templates
- Use `url_for('static', filename='...')` syntax

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Future Enhancements

- [ ] User authentication and registration
- [ ] Todo categories and tags
- [ ] Due dates and reminders
- [ ] Priority levels
- [ ] Search and filter functionality
- [ ] Export todos to PDF/Excel
- [ ] REST API for mobile app integration
- [ ] Dark mode toggle
- [ ] Drag and drop reordering

## Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the code comments for guidance
3. Create an issue in the repository
4. Contact the development team

---

**Happy Todo Managing! 📝✨**
