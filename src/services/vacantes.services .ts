import { IVacants } from "@/models/vacantes.models "; 
import { HttpClient } from "@/utils/client-https"; 

export class VacantsService {
    private static httpClient = new HttpClient();

    static async findAll(): Promise<IVacants[]> {
        try {
            const response = await this.httpClient.GET<{ content: IVacants[] }>("vacants?page=1&size=6");
            return response.content || [];
        } catch (error) {
            console.error("Error fetching vacancies:", error);
            throw error;
        }
    }

    static async destroy(id: string): Promise<void> {
        try {
            await this.httpClient.DELETE(`vacants/${id}`);
            console.log(`Vacant with id ${id} deleted successfully.`);
        } catch (error) {
            console.error(`Error deleting vacancy with id ${id}:`, error);
            throw error;
        }
    }

    static async post(vacant: IVacants): Promise<IVacants> {
        try {
            console.log("Datos de la vacante a enviar:", vacant); // Para depurar
            const response = await this.httpClient.POST<IVacants, IVacants>("vacants", vacant);
            return response;
        } catch (error) {
            // Manejo de errores
            const errorMessage = this.handleFetchError(error);
            console.error(errorMessage);
            throw new Error(errorMessage);
        }
    }

    static async update(vacants: IVacants): Promise<IVacants> {
        try {
            const response = await this.httpClient.PUT<IVacants, IVacants>(`vacants/${vacants.id}`, vacants);
            return response;
        } catch (error) {
            console.error(`Error updating vacancy with id ${vacants.id}:`, error);
            throw error;
        }
    }

    private static handleFetchError(error: unknown): string {
        if (error instanceof Error) {
            return error.message;
        }

        if (typeof error === 'object' && error !== null && 'message' in error) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return (error as any).message;
        }

        return 'Error desconocido al realizar la solicitud.';
    }
}
