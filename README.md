# Binar: Challenge

- Gunakan middleware `express.json()` untuk memenuhi kebutuhan manajemen data mobil melalui REST API!
- Gunakan `sequelize` sebagai modul yang digunakan untuk mengurus koneksi ke database!
- Gunakan `dbdiagram.io` dalam membuat entity relationship diagram!

# Entity Relationship Diagram
![alt text](https://github.com/fchrl03/challenge-05/blob/master/dbdiagram.png)

# Endpoint Rest API
- Get All Cars: GET `http://localhost:8000/cars`
- Get Cars By ID: GET `http://localhost:8000/cars/${id}`
- Create Cars: POST `http://localhost:8000/cars`
- Update Cars By ID: PUT `http://localhost:8000/cars/${id}`
- Delete Cars By ID: DELETE `http://localhost:8000/cars/${id}`

# Edit Config
- File `config/cf.json`

```typescript
{
  "development": {
    "username": "isi username",
    "password": "isi password",
    "database": "db_development",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "isi username",
    "password": "isi password",
    "database": "db_test",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "username": "isi username",
    "password": "isi password",
    "database": "db_production",
    "host": "localhost",
    "dialect": "postgres"
  }
}

```

# Edit Cloudinary
- File `config/cloud.js`
- [Website Cloudinary](https://cloudinary.com/ "Cloudinary")

```typescript
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'ISI_PUNYA_MASING2',
  api_key: 'ISI_PUNYA_MASING2',
  api_secret: 'ISI_PUNYA_MASING2',
  secure: true,
});

module.exports = cloudinary;
```
