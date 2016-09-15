module.exports = function (schema) {
    schema.statics.getDefaultValue = function (path) {
        if (schema.paths[path] == null) return ;

        if (typeof schema.paths[path].defaultValue == 'function') {
            return schema.paths[path].defaultValue();
        }

        return schema.paths[path].defaultValue;
    }
}
