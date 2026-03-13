export async function POST({ request }) {
  try {
    const formData = await request.json();

    console.log("🔵 Received form data:", formData);

    const payload = {
      name: formData.name || "",
      date: formData.date || "",
      time: formData.time || "",
      guests: formData.guests || 1,
      email: formData.email || "",
      phone: formData.phone || "",
      message: formData.message || "",
    };

    console.log("🔵 Forwarding payload to backend:", payload);

    const BACKEND_URL =
      "https://email-sender-174740019883.asia-south2.run.app/cozy/reservation";

    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await response.text();
    console.log("🟢 Backend raw response:", responseText);

    let responseData;
    try {
      responseData = responseText
        ? JSON.parse(responseText)
        : { success: true };
    } catch (e) {
      console.error("🔴 JSON parse error:", e);
      responseData = {
        success: true,
        message: "Reservation submitted successfully",
      };
    }

    if (!response.ok) {
      console.error(
        "🔴 Backend responded with status",
        response.status,
        response.statusText,
      );
      return new Response(
        JSON.stringify({
          success: false,
          message: responseData?.message || "Backend error",
          details: responseData,
        }),
        {
          status: response.status || 500,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("🔴 API route error:", error);

    return new Response(
      JSON.stringify({
        success: false,
        message: "Server error while sending reservation",
        error: String(error),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
