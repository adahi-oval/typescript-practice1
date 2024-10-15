export type Dish = [nutriScore: number, unhealthyScore: number];

/**
 * Ordena los platos según el valor nutricional de manera decreciente.
 * @param dishes Lista de platos.
 * @returns Lista de platos ordenada por valor nutricional decreciente.
 */
export function sortByNutriScoreDescending(dishes: Dish[]): Dish[] {
    return [...dishes].sort((a, b) => b[0] - a[0]);
}

/**
 * Ordena los platos según el grado de insalubridad de manera creciente.
 * @param dishes Lista de platos.
 * @returns Lista de platos ordenada por grado de insalubridad creciente.
 */
export function sortByUnhealthyScoreAscending(dishes: Dish[]): Dish[] {
    return [...dishes].sort((a, b) => a[1] - b[1]);
}

/**
 * Ordena los platos según el ratio valor nutricional / grado de insalubridad de manera decreciente.
 * @param dishes Lista de platos.
 * @returns Lista de platos ordenada por ratio decreciente.
 */
export function sortByRatioDescending(dishes: Array<Dish>): Array<Dish> {
    return dishes.sort((a, b) => (b[0] / b[1]) - (a[0] / a[1]));
}

/**
 * Selecciona los platos que maximizan el valor nutricional dentro del límite de insalubridad.
 * @param dishes Lista de platos.
 * @param maxUnhealthyScore Grado de insalubridad máximo permitido.
 * @returns Lista de platos seleccionados.
 */
export function selectMenu(dishes: Dish[], maxUnhealthyScore: number): Dish[] {
    let menu: Dish[] = [];
    let currentUnhealthyScore = 0;
    
    for (const dish of dishes) {
        if (currentUnhealthyScore + dish[1] <= maxUnhealthyScore) {
            menu.push(dish);
            currentUnhealthyScore += dish[1];
        } else {
            break;
        }
    }
    
    return menu;
}
