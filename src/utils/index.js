export const toFormData = (obj, form, namespace) => {
    const fd = form || new FormData();
    let formKey;

    for (const property in obj) {
        if (typeof obj[property] === 'boolean') {
            obj[property] = obj[property].toString();
        }

        if (obj.hasOwnProperty(property) && obj[property]) {
            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }

            // if the property is an object, but not a File, use recursivity.
            if (obj[property] instanceof Date) {
                fd.append(formKey, obj[property].toISOString());
            } else if (
                typeof obj[property] === 'object' &&
                !(obj[property] instanceof File)
            ) {
                toFormData(obj[property], fd, formKey);
            } else {
                // if it's a string or a File object
                fd.append(formKey, obj[property]);
            }
        }
    }

    return fd;
};

export function buildFormData(formData, data, parentKey) {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
            buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
    } else {
        const value = data == null ? '' : data;

        formData.append(parentKey, value);
    }
}

export const sortData = (data, sorting, setSorting, columnName, sortOrder) => {
    const sortedData = [...data];
  
    sortedData.sort((a, b) => {
        let comparison = 0;
  
        if (a[columnName] > b[columnName]) {
            comparison = 1;
        } else if (a[columnName] < b[columnName]) {
            comparison = -1;
        }
  
        return sortOrder === 'asc' ? comparison : -comparison;
    });
  
    setSorting((prevSorting) => ({
        column: columnName,
        order: sortOrder === 'asc' ? 'desc' : 'asc',
    }));
  
    return sortedData;
};