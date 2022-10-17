
# Github User Search App

A Project which uses Github's Public & popular user API to pull data of Github Users


## API Reference


#### Get User's stats

```http
  GET /api.github.com/users/${username}
```

#### Get User's repos (Additional)

```http
  GET /api.github.com/users/${username}/${repos}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required**. Github Username |
| `repos`      | `string` |  Github Users Repos in alphabetical order |




## Tech Stack

**Client:** Vite - Vanilla JS & TailwindCSS



## Packages

Vite - Modern Frontend Tooling
```bash
    npm create vite@latest
```
Tailwind CSS - An Utility CSS Framework

```bash
    npm install -D tailwindcss
    npx tailwindcss init
```


## Screenshot

![Screenshot](screenshot.png)

