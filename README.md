# MegaHack 3.0 Time 26
>**2Commerce:** Rede social para conectar empresas e fornecedores

### Setup

```terminal
// instalar dependências
yarn install
// adicionar banco de dados teste
yarn rw db save
yarn rw db up
// adicionar dados teste
yarn rw db seed
```

### Desenvolvimento local

A autentição é por meio do Firebase Auth. É necessário adicionar as keys em:
 - /api/src/lib/serviceAccountKey.json (para o backend)
 - /web/src/firebaseConfig.json (front end)

```terminal
yarn rw dev
```

O navegador irá abrir automaticamente o `http://localhost:8910` para ver o app. Lambda functions estão no `http://localhost:8911`.
