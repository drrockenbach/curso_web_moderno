module.exports = {
    /*Busca de forma recursiva, todos os ids das categorias filhas conforme categoria passada por parâmetro
    EX: 1 - Cadastros
            2 - Gerais
                3 - Usuário
    Passando 1 como parâmetro, vai retornar 1, 2, 3.
    Passando 2, retorna 2, 3            
    */
    categoryWithChildren: `
        WITH RECURSIVE subcategories (id) AS (
            SELECT id FROM categories WHERE id = ? 
            UNION ALL
            SELECT c.id FROM subcategories, categories c
             WHERE "parentId" = subcategories.id
        )
        SELECT id FROM subcategories
    
    `
}