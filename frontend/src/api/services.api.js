
const API_URL = import.meta.env.VITE_API_URL;

export async function fetchServices() {
    try {
        const res = await fetch(`${API_URL}/services`, {
            credentials: "include",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch services");
        }

        return await res.json();
    } catch (err) {
        console.error("❌ fetchServices:", err);
        throw err;
    }
}

