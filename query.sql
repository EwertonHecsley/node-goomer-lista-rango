create table
    enderecos(
        id serial primary key,
        cidade text,
        logradouro text,
        bairro text,
        cep text,
        numero text default 'sn',
        data_cadastro date default now()
    );

create table
    restaurantes(
        id serial primary key,
        nome text not null,
        horario text not null,
        foto text,
        endereco int references enderecos(id)
    );

alter table enderecos add column estado text;

create table
    categorias (
        id serial primary key,
        descricao text
    );

create table
    produtos (
        id serial primary key,
        nome text not null,
        preco_produto numeric(10, 2) not null,
        foto text,
        categoria_produto_id int references categorias(id) not null,
        promocao boolean
    );

create table
    promocoes (
        id serial primary key,
        descricao text not null,
        preco_promocional numeric(10, 2) not null,
        produto_id int references produtos(id),
        horario_inicio time CHECK (
            horario_inicio >= '00:00:00'
            AND horario_inicio < '24:00:00'
        ),
        horario_fim time CHECK (
            horario_fim >= '00:00:00'
            AND horario_fim < '24:00:00'
        )
    );