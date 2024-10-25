import { IVacants } from "@/models/vacantes.models ";
import { HttpClient } from "@/utils/client-https";

export class vacantsService {
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

  static async destroy(id: string): Promise<IVacants> {
    try {
      const response = await this.httpClient.delete<IVacants>(`vacants/${id}`);
      return response;
    } catch (error) {
      console.error(`Error deleting vacancy with id ${id}:`, error);
      throw error;
    }
  }

  static async post(vacants: IVacants): Promise<IVacants> {
    try {
      const response = await this.httpClient.post<IVacants, IVacants>("vacants", vacants);
      return response;
    } catch (error) {
      console.error("Error creating vacancy:", error);
      throw error;
    }
  }

  static async update(vacants: IVacants): Promise<IVacants> {
    try {
      const response = await this.httpClient.put<IVacants, IVacants>(`vacants/${vacants.id}`, vacants);
      return response;
    } catch (error) {
      console.error(`Error updating vacancy with id ${vacants.id}:`, error);
      throw error;
    }
  }
}
