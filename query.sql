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