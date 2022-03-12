const img_dic = require("./imgs_dic");


const get_img = (tea_type) => {
    tea_type = tea_type.toLowerCase().split(' ').join('_');
    console.log(tea_type);
    console.log(img_dic);
    return img_dic.img_sources[tea_type];
}

module.exports = {
    get_img
};