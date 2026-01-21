export async function fetchServices() {
    const res = await fetch("http://localhost:5000/api/services");

    if (!res.ok) {
        throw new Error("Failed to fetch services");
    }

    return res.json();
}
