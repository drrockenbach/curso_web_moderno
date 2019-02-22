module.exports = app => {
    
    const defaultStat = {
        users: 0,
        categories: 0,
        articles: 0
    }

    const Stat = app.mongoose.model('Stat', { 
        users: Number,
        categories: Number,
        articles: Number,
        createdAt: Date })

    const get = (req, res) => {
        // findOne - primeiro parâmetro filtros, segundo atributos que serão selecionados
        Stat.findOne({}, {}, { sort: {'createdAt': -1}})
            .then(stat => {
                res.json(stat || defaultStat )
            }) 
    }

    return { Stat, get }

}